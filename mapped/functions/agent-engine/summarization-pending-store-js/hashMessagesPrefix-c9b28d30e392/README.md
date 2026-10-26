# `hashMessagesPrefix`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-pending-store.js` · [README do módulo](../../../../modules/agent-engine/summarization-pending-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:647796-647807](../../../../../reference/runtime/host-main.cjs#L647796-L647807) | `FunctionDeclaration` | sim | `privacyMode, messages2` |
| [evaluation:439453-439464](../../../../../reference/runtime/sand-eval-runner.cjs#L439453-L439464) | `FunctionDeclaration` | sim | `privacyMode, messages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647796-647807](../../../../../reference/runtime/host-main.cjs#L647796-L647807) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:439453-439464](../../../../../reference/runtime/sand-eval-runner.cjs#L439453-L439464) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:647796

Chamadas escritas diretamente neste corpo: `Buffer.allocUnsafe`, `createRedactedCoreMessageSerde`, `hash2.digest`, `hash2.update`, `lengthPrefix.writeUInt32BE`, `serde.serialize`.

SHA-256 do trecho: `0a2ad7d40b0a8ccd0eb39702ae7d4a50f6b7abc7439034178e51717c4317c764`.

### evaluation:439453

Chamadas escritas diretamente neste corpo: `Buffer.allocUnsafe`, `createRedactedCoreMessageSerde`, `hash2.digest`, `hash2.update`, `lengthPrefix.writeUInt32BE`, `serde.serialize`.

SHA-256 do trecho: `d78fc579eb19e574a7092278d4eaa3b4dd517f42d0b0c7096afe3ef2a1be9deb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
