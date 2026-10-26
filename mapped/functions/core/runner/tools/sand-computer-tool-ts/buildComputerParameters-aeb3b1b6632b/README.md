# `buildComputerParameters`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777047-777074](../../../../../../../reference/runtime/host-main.cjs#L777047-L777074) | `FunctionDeclaration` | não | `autoReview, actionAliases = () => false` |
| [evaluation:576692-576719](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576692-L576719) | `FunctionDeclaration` | não | `autoReview, actionAliases = () => false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777047-777074](../../../../../../../reference/runtime/host-main.cjs#L777047-L777074) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576692-576719](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576692-L576719) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:777047

Chamadas escritas diretamente neste corpo: `.describe`, `.superRefine`, `buildComputerActionCoreSchema`, `buildFollowUpParameter`, `external_exports2.object`, `external_exports2.preprocess`.

SHA-256 do trecho: `4a3acb7a55fbfa05a49d87b15ccf75a0c34732007e523557c82bb8f616138c4b`.

### evaluation:576692

Chamadas escritas diretamente neste corpo: `.describe`, `.superRefine`, `buildComputerActionCoreSchema`, `buildFollowUpParameter`, `external_exports3.object`, `external_exports3.preprocess`.

SHA-256 do trecho: `abee2db3663b17fa26063118fe7e16d3eaa68460604601e2943af5eb10978bf0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
