# `refreshNamedAgentSelfDocumentInMessages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/cloud-meta-agent/self-document.js` · [README do módulo](../../../../../../modules/agent-engine/prompts/cloud-meta-agent/self-document-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:647581-647637](../../../../../../../reference/runtime/host-main.cjs#L647581-L647637) | `FunctionDeclaration` | sim | `ctx, messages2, getNamedAgentSelfDocument, privacyMode` |
| [evaluation:439241-439297](../../../../../../../reference/runtime/sand-eval-runner.cjs#L439241-L439297) | `FunctionDeclaration` | sim | `ctx, messages, getNamedAgentSelfDocument, privacyMode` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647581-647637](../../../../../../../reference/runtime/host-main.cjs#L647581-L647637) | 1 | 0 | 1 | 2 | 0 | 1 |
| [evaluation:439241-439297](../../../../../../../reference/runtime/sand-eval-runner.cjs#L439241-L439297) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:647581

Chamadas escritas diretamente neste corpo: `getNamedAgentSelfDocument`, `logger59.warn`, `messages2.map`.

Alvos de atribuição ou incremento: `contents`.

SHA-256 do trecho: `1abbad0b14f11d5c1c0910702cc2df20604a91e7f22bd951e7f98bce6728319f`.

### evaluation:439241

Chamadas escritas diretamente neste corpo: `getNamedAgentSelfDocument`, `logger36.warn`, `messages.map`.

Alvos de atribuição ou incremento: `contents`.

SHA-256 do trecho: `05a94c30ba63d419ba17bf153911bc0392f45b1929b56ac90172980909e53f93`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
