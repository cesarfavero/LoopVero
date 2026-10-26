# `sharedSurface`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/session-context-prompt.ts` · [README do módulo](../../../../../modules/core/runner/session-context-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538371-538379](../../../../../../reference/runtime/sand-eval-runner.cjs#L538371-L538379) | `FunctionDeclaration` | não | `session` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538371-538379](../../../../../../reference/runtime/sand-eval-runner.cjs#L538371-L538379) | 5 | 0 | 0 | 5 | 0 | 0 |

### evaluation:538371

Chamadas escritas diretamente neste corpo: `session.sessionId.startsWith`.

SHA-256 do trecho: `e1ee20da92f4366b6373a08e56db4404b5444a045762cd0bcb2798807e9d22b0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
