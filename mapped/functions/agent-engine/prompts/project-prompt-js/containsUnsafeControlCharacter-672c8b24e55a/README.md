# `containsUnsafeControlCharacter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640976-640984](../../../../../../reference/runtime/host-main.cjs#L640976-L640984) | `FunctionDeclaration` | não | `value` |
| [evaluation:431589-431597](../../../../../../reference/runtime/sand-eval-runner.cjs#L431589-L431597) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640976-640984](../../../../../../reference/runtime/host-main.cjs#L640976-L640984) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:431589-431597](../../../../../../reference/runtime/sand-eval-runner.cjs#L431589-L431597) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:640976

Chamadas escritas diretamente neste corpo: `character.codePointAt`.

SHA-256 do trecho: `f2ba71d149da545381abc60912cdc85832e7bfe7f80f3610078c00ff0fd28fbe`.

### evaluation:431589

Chamadas escritas diretamente neste corpo: `character.codePointAt`.

SHA-256 do trecho: `f2ba71d149da545381abc60912cdc85832e7bfe7f80f3610078c00ff0fd28fbe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
