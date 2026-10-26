# `logText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/observability/README.md).

**Módulo:** `shared/observability/telemetry-fields.ts` · [README do módulo](../../../../../modules/shared/observability/telemetry-fields-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:450902-450905](../../../../../../reference/runtime/host-main.cjs#L450902-L450905) | `FunctionDeclaration` | não | `value, cap` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:450902-450905](../../../../../../reference/runtime/host-main.cjs#L450902-L450905) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:450902

Chamadas escritas diretamente neste corpo: `isLogText`, `value.slice`.

SHA-256 do trecho: `74961fa28ee106677765245cdfa9ec949c702bfc2351c1160c14a2c814e1d3e9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
