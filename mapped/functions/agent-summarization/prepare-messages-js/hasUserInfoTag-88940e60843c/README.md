# `hasUserInfoTag`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/prepare-messages.js` · [README do módulo](../../../../modules/agent-summarization/prepare-messages-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620512-620519](../../../../../reference/runtime/host-main.cjs#L620512-L620519) | `FunctionDeclaration` | não | `message` |
| [evaluation:304866-304873](../../../../../reference/runtime/sand-eval-runner.cjs#L304866-L304873) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620512-620519](../../../../../reference/runtime/host-main.cjs#L620512-L620519) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:304866-304873](../../../../../reference/runtime/sand-eval-runner.cjs#L304866-L304873) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:620512

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `USER_INFO_TAG_REGEX.test`, `content.filter`, `content.search`, `isRedactedString`.

SHA-256 do trecho: `ffa66518db43f3433c8c253f34ca1ee9729230d42b2e19afafc7fb71004c8f61`.

### evaluation:304866

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `USER_INFO_TAG_REGEX.test`, `content.filter`, `content.search`, `isRedactedString`.

SHA-256 do trecho: `004e0f29cb51d44abdf8e17bde0ba6d84e005bacd9713a51e6ddb64ecabbbfe1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
