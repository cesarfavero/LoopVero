# `armMcpAuthWait`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/mcp-auth-wait.ts` · [README do módulo](../../../../../../modules/core/runner/tools/mcp-auth-wait-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765309-765329](../../../../../../../reference/runtime/host-main.cjs#L765309-L765329) | `FunctionDeclaration` | não | `register, emission` |
| [evaluation:558676-558696](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558676-L558696) | `FunctionDeclaration` | não | `register, emission` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765309-765329](../../../../../../../reference/runtime/host-main.cjs#L765309-L765329) | 6 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:558676-558696](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558676-L558696) | 6 | 0 | 0 | 2 | 0 | 1 |

### host:765309

Chamadas escritas diretamente neste corpo: `errorClassOf`, `pending.catch`, `register`, `reportHostDiagnostic`.

Alvos de atribuição ou incremento: `pending`.

SHA-256 do trecho: `674a5d973b0ca97592ef8c037e0cb7cd3d69e1832fafd29e69d2c8935233e864`.

### evaluation:558676

Chamadas escritas diretamente neste corpo: `errorClassOf`, `pending.catch`, `register`, `reportHostDiagnostic`.

Alvos de atribuição ou incremento: `pending`.

SHA-256 do trecho: `8e234f7f8ad1cedb93604bb0ed11ab0281d84849ef52a624cb47e4124d447101`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
