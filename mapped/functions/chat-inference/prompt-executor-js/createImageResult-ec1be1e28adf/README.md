# `createImageResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/prompt-executor.js` · [README do módulo](../../../../modules/chat-inference/prompt-executor-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617997-618007](../../../../../reference/runtime/host-main.cjs#L617997-L618007) | `FunctionDeclaration` | não | `imageData, mimeType, textContent, isError = false` |
| [evaluation:287368-287378](../../../../../reference/runtime/sand-eval-runner.cjs#L287368-L287378) | `FunctionDeclaration` | não | `imageData, mimeType, textContent2, isError = false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617997-618007](../../../../../reference/runtime/host-main.cjs#L617997-L618007) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:287368-287378](../../../../../reference/runtime/sand-eval-runner.cjs#L287368-L287378) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:617997

Chamadas escritas diretamente neste corpo: `content.push`.

SHA-256 do trecho: `3badb129fc94af7edd3e805227b8e10aaf6ffa0d5a7017f18651cf359a3eabe9`.

### evaluation:287368

Chamadas escritas diretamente neste corpo: `content.push`.

SHA-256 do trecho: `23375f92036cee882024df4b08d4840d32c2f93d3e929cd42f27e5b2b18ae580`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
