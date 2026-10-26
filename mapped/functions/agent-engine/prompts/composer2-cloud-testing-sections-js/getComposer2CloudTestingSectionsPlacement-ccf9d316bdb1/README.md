# `getComposer2CloudTestingSectionsPlacement`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/composer2-cloud-testing-sections.js` · [README do módulo](../../../../../modules/agent-engine/prompts/composer2-cloud-testing-sections-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:638527-638536](../../../../../../reference/runtime/host-main.cjs#L638527-L638536) | `FunctionDeclaration` | não | `props` |
| [evaluation:429120-429129](../../../../../../reference/runtime/sand-eval-runner.cjs#L429120-L429129) | `FunctionDeclaration` | não | `props` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:638527-638536](../../../../../../reference/runtime/host-main.cjs#L638527-L638536) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:429120-429129](../../../../../../reference/runtime/sand-eval-runner.cjs#L429120-L429129) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:638527

Chamadas escritas diretamente neste corpo: `isCloudAgentTestingPromptEligibleEnvironment`, `isNamedAgentHomePromptSession`, `shouldUseExperimentalCloudBehavior`.

SHA-256 do trecho: `808b7283ce20b5b5b708c25b882782e2967fbacd54e29a6cb930055a1df33790`.

### evaluation:429120

Chamadas escritas diretamente neste corpo: `isCloudAgentTestingPromptEligibleEnvironment`, `isNamedAgentHomePromptSession`, `shouldUseExperimentalCloudBehavior`.

SHA-256 do trecho: `808b7283ce20b5b5b708c25b882782e2967fbacd54e29a6cb930055a1df33790`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
