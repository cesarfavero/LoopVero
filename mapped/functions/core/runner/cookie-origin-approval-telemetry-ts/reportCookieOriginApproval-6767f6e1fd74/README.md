# `reportCookieOriginApproval`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/cookie-origin-approval-telemetry.ts` · [README do módulo](../../../../../modules/core/runner/cookie-origin-approval-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:456119-456125](../../../../../../reference/runtime/host-main.cjs#L456119-L456125) | `FunctionDeclaration` | não | `deps, makeReport` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456119-456125](../../../../../../reference/runtime/host-main.cjs#L456119-L456125) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:456119

Chamadas escritas diretamente neste corpo: `deps.log`, `deps.report`, `errorLogTag`, `makeReport`.

SHA-256 do trecho: `b6524244c5c103ae41bb0700644b3a85c552d0113d9ee72b8fb7614f8bbbb7e1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
