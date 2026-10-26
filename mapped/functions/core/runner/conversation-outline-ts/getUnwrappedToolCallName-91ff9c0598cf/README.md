# `getUnwrappedToolCallName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/conversation-outline.ts` · [README do módulo](../../../../../modules/core/runner/conversation-outline-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719698-719701](../../../../../../reference/runtime/host-main.cjs#L719698-L719701) | `FunctionDeclaration` | não | `toolCall2` |
| [evaluation:526174-526177](../../../../../../reference/runtime/sand-eval-runner.cjs#L526174-L526177) | `FunctionDeclaration` | não | `toolCall2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719698-719701](../../../../../../reference/runtime/host-main.cjs#L719698-L719701) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:526174-526177](../../../../../../reference/runtime/sand-eval-runner.cjs#L526174-L526177) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:719698

Chamadas escritas diretamente neste corpo: `decodeSandToolActivity`.

SHA-256 do trecho: `47f28f951a7a6f2813800d79e5a26e879dd902c6125a77838821a07e59117ab4`.

### evaluation:526174

Chamadas escritas diretamente neste corpo: `decodeSandToolActivity`.

SHA-256 do trecho: `47f28f951a7a6f2813800d79e5a26e879dd902c6125a77838821a07e59117ab4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
