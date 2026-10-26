# `createMemoryVirtualMount/search`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/virtual-mounts/memory.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769678-769682](../../../../../../reference/runtime/host-main.cjs#L769678-L769682) | `ArrowFunctionExpression` | sim | `_ctx, _access, request5` |
| [evaluation:565347-565351](../../../../../../reference/runtime/sand-eval-runner.cjs#L565347-L565351) | `ArrowFunctionExpression` | sim | `_ctx, _access, request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769678-769682](../../../../../../reference/runtime/host-main.cjs#L769678-L769682) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565347-565351](../../../../../../reference/runtime/sand-eval-runner.cjs#L565347-L565351) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:769678

Chamadas escritas diretamente neste corpo: `.map`, `collectMemoryCandidates`, `memorySearch`, `scopesUnder`.

SHA-256 do trecho: `ae405f259cbb7061c6e802f34a779981112dd480af3df333b107d4e97c7a4d4d`.

### evaluation:565347

Chamadas escritas diretamente neste corpo: `.map`, `collectMemoryCandidates`, `memorySearch`, `scopesUnder`.

SHA-256 do trecho: `38a1547c52ed5b1f627a0aad182fd3ac99485b2f7abb9d9587397393574f8f4e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
