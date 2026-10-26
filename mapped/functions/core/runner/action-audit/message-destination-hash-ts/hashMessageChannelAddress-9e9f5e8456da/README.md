# `hashMessageChannelAddress`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/action-audit/message-destination-hash.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/message-destination-hash-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:758000-758005](../../../../../../../reference/runtime/host-main.cjs#L758000-L758005) | `FunctionDeclaration` | não | `address` |
| [evaluation:544098-544103](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544098-L544103) | `FunctionDeclaration` | não | `address` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758000-758005](../../../../../../../reference/runtime/host-main.cjs#L758000-L758005) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:544098-544103](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544098-L544103) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:758000

Chamadas escritas diretamente neste corpo: `.digest`, `.slice`, `.update`, `MESSAGE_CHANNEL_PLATFORMS.has`, `Math.max`, `address.trim`, `trimmed.indexOf`, `trimmed.slice`.

SHA-256 do trecho: `d5a817f4c64826507c0f6eeeec548aafb0990471ae6ae328f676a0b85694df52`.

### evaluation:544098

Chamadas escritas diretamente neste corpo: `.digest`, `.slice`, `.update`, `MESSAGE_CHANNEL_PLATFORMS.has`, `Math.max`, `address.trim`, `trimmed.indexOf`, `trimmed.slice`.

SHA-256 do trecho: `96793acf84ec70ae1b66769eab0812c1716327b837e1b7c028398d7fb14f3781`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
