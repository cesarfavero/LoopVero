# `policyOfRaw`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-tool-permissions.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-tool-permissions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686907-686921](../../../../../../reference/runtime/host-main.cjs#L686907-L686921) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686907-686921](../../../../../../reference/runtime/host-main.cjs#L686907-L686921) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:686907

Chamadas escritas diretamente neste corpo: `.map`, `Object.entries`, `Object.fromEntries`, `isUnknownRecord2`, `toolPermissionOfRaw`.

SHA-256 do trecho: `f14fa0dbd547e4bd72adb42b2eeedb8b5686db69185818e32025110ec0e32b3c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
