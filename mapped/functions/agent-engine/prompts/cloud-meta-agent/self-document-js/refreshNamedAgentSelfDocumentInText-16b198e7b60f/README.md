# `refreshNamedAgentSelfDocumentInText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/cloud-meta-agent/self-document.js` · [README do módulo](../../../../../../modules/agent-engine/prompts/cloud-meta-agent/self-document-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:647567-647580](../../../../../../../reference/runtime/host-main.cjs#L647567-L647580) | `FunctionDeclaration` | não | `text3, contents` |
| [evaluation:439227-439240](../../../../../../../reference/runtime/sand-eval-runner.cjs#L439227-L439240) | `FunctionDeclaration` | não | `text3, contents` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647567-647580](../../../../../../../reference/runtime/host-main.cjs#L647567-L647580) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:439227-439240](../../../../../../../reference/runtime/sand-eval-runner.cjs#L439227-L439240) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:647567

Chamadas escritas diretamente neste corpo: `SELF_DOCUMENT_BLOCK_REGEX.test`, `renderNamedAgentSelfDocumentBlock`, `text3.indexOf`, `text3.replace`, `text3.slice`.

SHA-256 do trecho: `4c1f65a742f247784f00b043a6c717a5a06428fa86519a5e8c904e78c9e0998b`.

### evaluation:439227

Chamadas escritas diretamente neste corpo: `SELF_DOCUMENT_BLOCK_REGEX.test`, `renderNamedAgentSelfDocumentBlock`, `text3.indexOf`, `text3.replace`, `text3.slice`.

SHA-256 do trecho: `4c1f65a742f247784f00b043a6c717a5a06428fa86519a5e8c904e78c9e0998b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
