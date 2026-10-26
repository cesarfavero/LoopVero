# `isEmptyAssistantMessage3`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/prepare-messages.js` · [README do módulo](../../../../modules/agent-summarization/prepare-messages-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620520-620529](../../../../../reference/runtime/host-main.cjs#L620520-L620529) | `FunctionDeclaration` | não | `message` |
| [evaluation:304874-304883](../../../../../reference/runtime/sand-eval-runner.cjs#L304874-L304883) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620520-620529](../../../../../reference/runtime/host-main.cjs#L620520-L620529) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:304874-304883](../../../../../reference/runtime/sand-eval-runner.cjs#L304874-L304883) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:620520

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isRedactedString`.

SHA-256 do trecho: `e64c9de0520a904df0d25e5b1ac20fdc6f8dd641ae2717b4b228a614b6003922`.

### evaluation:304874

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isRedactedString`.

SHA-256 do trecho: `e64c9de0520a904df0d25e5b1ac20fdc6f8dd641ae2717b4b228a614b6003922`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
