# `getConnectRetryAfterMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/errors/connect-errors.ts` · [README do módulo](../../../../../modules/shared/errors/connect-errors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:451266-451269](../../../../../../reference/runtime/host-main.cjs#L451266-L451269) | `FunctionDeclaration` | não | `error64, nowMs2 = Date.now()` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451266-451269](../../../../../../reference/runtime/host-main.cjs#L451266-L451269) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:451266

Chamadas escritas diretamente neste corpo: `error64.metadata.get`, `parseRetryAfterHeaderMs`.

SHA-256 do trecho: `a778ddaa5e8628bf72c3881087d6e634e98a823bc35004a2df3623214689e2dc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
