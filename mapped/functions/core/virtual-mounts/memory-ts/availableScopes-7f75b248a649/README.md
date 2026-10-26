# `availableScopes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/virtual-mounts/memory.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769604-769612](../../../../../../reference/runtime/host-main.cjs#L769604-L769612) | `FunctionDeclaration` | não | `deps` |
| [evaluation:565273-565281](../../../../../../reference/runtime/sand-eval-runner.cjs#L565273-L565281) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769604-769612](../../../../../../reference/runtime/host-main.cjs#L769604-L769612) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565273-565281](../../../../../../reference/runtime/sand-eval-runner.cjs#L565273-L565281) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:769604

Chamadas escritas diretamente neste corpo: `MEMORY_SCOPES.filter`, `deps.memoryStore`.

SHA-256 do trecho: `7d6b50c2ca4443212beced74392ddcec0bf70776ee80976da630e26455143172`.

### evaluation:565273

Chamadas escritas diretamente neste corpo: `MEMORY_SCOPES.filter`, `deps.memoryStore`.

SHA-256 do trecho: `7d6b50c2ca4443212beced74392ddcec0bf70776ee80976da630e26455143172`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
