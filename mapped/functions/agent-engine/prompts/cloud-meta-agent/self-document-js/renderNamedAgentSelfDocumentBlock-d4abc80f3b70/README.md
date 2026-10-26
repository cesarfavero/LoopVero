# `renderNamedAgentSelfDocumentBlock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/cloud-meta-agent/self-document.js` · [README do módulo](../../../../../../modules/agent-engine/prompts/cloud-meta-agent/self-document-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:647549-647560](../../../../../../../reference/runtime/host-main.cjs#L647549-L647560) | `FunctionDeclaration` | não | `contents` |
| [evaluation:439209-439220](../../../../../../../reference/runtime/sand-eval-runner.cjs#L439209-L439220) | `FunctionDeclaration` | não | `contents` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647549-647560](../../../../../../../reference/runtime/host-main.cjs#L647549-L647560) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:439209-439220](../../../../../../../reference/runtime/sand-eval-runner.cjs#L439209-L439220) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:647549

Chamadas escritas diretamente neste corpo: `.join`, `.replaceAll`, `contents.trim`, `rawBody.replaceAll`.

SHA-256 do trecho: `bd64f425ac232d8cd1b7c0bf56a045907f7cb2215676beb4e79cca56df997de8`.

### evaluation:439209

Chamadas escritas diretamente neste corpo: `.join`, `.replaceAll`, `contents.trim`, `rawBody.replaceAll`.

SHA-256 do trecho: `bd64f425ac232d8cd1b7c0bf56a045907f7cb2215676beb4e79cca56df997de8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
