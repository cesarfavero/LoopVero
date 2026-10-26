# `extractNamedAgentSelfDocumentBlock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/cloud-meta-agent/self-document.js` · [README do módulo](../../../../../../modules/agent-engine/prompts/cloud-meta-agent/self-document-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:647561-647566](../../../../../../../reference/runtime/host-main.cjs#L647561-L647566) | `FunctionDeclaration` | não | `text3` |
| [evaluation:439221-439226](../../../../../../../reference/runtime/sand-eval-runner.cjs#L439221-L439226) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647561-647566](../../../../../../../reference/runtime/host-main.cjs#L647561-L647566) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:439221-439226](../../../../../../../reference/runtime/sand-eval-runner.cjs#L439221-L439226) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:647561

Chamadas escritas diretamente neste corpo: `SELF_DOCUMENT_BLOCK_REGEX.exec`.

SHA-256 do trecho: `adff8139c166691a143365fecb8aaf0a0e95d9041efe56e0ca71e53fe2a56f2f`.

### evaluation:439221

Chamadas escritas diretamente neste corpo: `SELF_DOCUMENT_BLOCK_REGEX.exec`.

SHA-256 do trecho: `adff8139c166691a143365fecb8aaf0a0e95d9041efe56e0ca71e53fe2a56f2f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
