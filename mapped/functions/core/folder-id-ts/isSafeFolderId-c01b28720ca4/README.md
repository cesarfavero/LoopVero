# `isSafeFolderId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/folder-id.ts` · [README do módulo](../../../../modules/core/folder-id-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496962-496964](../../../../../reference/runtime/host-main.cjs#L496962-L496964) | `FunctionDeclaration` | não | `id` |
| [evaluation:534341-534343](../../../../../reference/runtime/sand-eval-runner.cjs#L534341-L534343) | `FunctionDeclaration` | não | `id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496962-496964](../../../../../reference/runtime/host-main.cjs#L496962-L496964) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534341-534343](../../../../../reference/runtime/sand-eval-runner.cjs#L534341-L534343) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:496962

Chamadas escritas diretamente neste corpo: `id.includes`.

SHA-256 do trecho: `68e2c954b352eb5e67d4a21ff748ff30f1ae8b1ad90e83c0e1f84134574bed94`.

### evaluation:534341

Chamadas escritas diretamente neste corpo: `id.includes`.

SHA-256 do trecho: `68e2c954b352eb5e67d4a21ff748ff30f1ae8b1ad90e83c0e1f84134574bed94`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
