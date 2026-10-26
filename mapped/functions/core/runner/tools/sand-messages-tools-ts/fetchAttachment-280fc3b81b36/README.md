# `fetchAttachment`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-messages-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777983-778005](../../../../../../../reference/runtime/host-main.cjs#L777983-L778005) | `FunctionDeclaration` | sim | `ctx, args, deps, inflightImages` |
| [evaluation:577718-577740](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577718-L577740) | `FunctionDeclaration` | sim | `ctx, args, deps, inflightImages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777983-778005](../../../../../../../reference/runtime/host-main.cjs#L777983-L778005) | 1 | 0 | 3 | 2 | 0 | 0 |
| [evaluation:577718-577740](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577718-L577740) | 1 | 0 | 3 | 2 | 0 | 0 |

### host:777983

Chamadas escritas diretamente neste corpo: `INLINE_IMAGE_MIMES.has`, `JSON.stringify`, `boxFileName`, `deps.agentBox.uploadFile`, `deps.getBoxId`, `deps.messages.run`, `import_node_buffer8.Buffer.from`, `import_node_path170.posix.join`, `inflightImages.set`, `shrinkImageForModel`.

SHA-256 do trecho: `7192e5e54536bc4a4b26e2a2b10b5b8d835ccbcb89f6f251ad627208df9f20b6`.

### evaluation:577718

Chamadas escritas diretamente neste corpo: `INLINE_IMAGE_MIMES.has`, `JSON.stringify`, `boxFileName`, `deps.agentBox.uploadFile`, `deps.getBoxId`, `deps.messages.run`, `import_node_buffer12.Buffer.from`, `import_node_path41.posix.join`, `inflightImages.set`, `shrinkImageForModel`.

SHA-256 do trecho: `4951b96ab6030c5ab482f40e54db82e604459b37339afbbd69cfded62c162043`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
