# `createSandFrozenPromptTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/frozen-prompts/frozen-prompt-tools.ts` · [README do módulo](../../../../../modules/core/frozen-prompts/frozen-prompt-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586304-586321](../../../../../../reference/runtime/sand-eval-runner.cjs#L586304-L586321) | `FunctionDeclaration` | não | `frozenPrompt` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586304-586321](../../../../../../reference/runtime/sand-eval-runner.cjs#L586304-L586321) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586304

Chamadas escritas diretamente neste corpo: `frozenPrompt.tools.map`, `new Set`.

SHA-256 do trecho: `2e35c3d178343f706ce1f274fac92521602aa033189338349e325c00ff9c93a3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
