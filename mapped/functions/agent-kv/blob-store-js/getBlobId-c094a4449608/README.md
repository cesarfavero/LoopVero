# `getBlobId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/blob-store.js` · [README do módulo](../../../../modules/agent-kv/blob-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:615944-615947](../../../../../reference/runtime/host-main.cjs#L615944-L615947) | `FunctionDeclaration` | sim | `blobData` |
| [evaluation:284729-284732](../../../../../reference/runtime/sand-eval-runner.cjs#L284729-L284732) | `FunctionDeclaration` | sim | `blobData` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615944-615947](../../../../../reference/runtime/host-main.cjs#L615944-L615947) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:284729-284732](../../../../../reference/runtime/sand-eval-runner.cjs#L284729-L284732) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:615944

Chamadas escritas diretamente neste corpo: `crypto.subtle.digest`, `new Uint8Array`, `toUint8Array2`.

SHA-256 do trecho: `7aaa7a633509d81777269cc9ca7d4612dbff2889f67b34aa38bc3353280b559c`.

### evaluation:284729

Chamadas escritas diretamente neste corpo: `crypto.subtle.digest`, `new Uint8Array`, `toUint8Array`.

SHA-256 do trecho: `42de339abc5d25bfbdae253d2ccfbc3bf6ff4ad95c5366ca5cf25c65d4f8a99a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
