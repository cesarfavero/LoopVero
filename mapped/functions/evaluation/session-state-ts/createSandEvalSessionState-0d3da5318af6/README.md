# `createSandEvalSessionState`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/session-state.ts` · [README do módulo](../../../../modules/evaluation/session-state-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630191-630211](../../../../../reference/runtime/sand-eval-runner.cjs#L630191-L630211) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630191-630211](../../../../../reference/runtime/sand-eval-runner.cjs#L630191-L630211) | 1 | 0 | 2 | 1 | 0 | 0 |

### evaluation:630191

Chamadas escritas diretamente neste corpo: `createLocalBrainDocsFs`, `new SandBrainDocsStore`, `store.load`.

SHA-256 do trecho: `228cf49c7ee6af220d7ea6216efd1fa7e6e40e0dc3111193713e7f33ffec9f37`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
