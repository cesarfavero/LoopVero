# `connectorAuthProbeError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/connector-auth-probe-error.ts` · [README do módulo](../../../../../modules/shared/observability/connector-auth-probe-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685449-685457](../../../../../../reference/runtime/host-main.cjs#L685449-L685457) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685449-685457](../../../../../../reference/runtime/host-main.cjs#L685449-L685457) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:685449

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `.trim`, `HTTP_STATUS_IN_TEXT.exec`, `Number`, `Number.isInteger`, `PROBE_ERROR_PATTERNS.find`, `probeErrorForStatus`.

SHA-256 do trecho: `1c1f8022d347288babe6632ce1e0ecda7690c65ebf66a3dc7ef4761f637588a8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
