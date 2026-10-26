# `memoryPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/virtual-mounts/memory.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769597-769599](../../../../../../reference/runtime/host-main.cjs#L769597-L769599) | `FunctionDeclaration` | não | `candidate` |
| [evaluation:565266-565268](../../../../../../reference/runtime/sand-eval-runner.cjs#L565266-L565268) | `FunctionDeclaration` | não | `candidate` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769597-769599](../../../../../../reference/runtime/host-main.cjs#L769597-L769599) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565266-565268](../../../../../../reference/runtime/sand-eval-runner.cjs#L565266-L565268) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:769597

Chamadas escritas diretamente neste corpo: `encodeURIComponent`, `memoryScopePath`.

SHA-256 do trecho: `f788c29aa8bda5620348ea0dde447aec22bedab58bfd77cf39757ef296923434`.

### evaluation:565266

Chamadas escritas diretamente neste corpo: `encodeURIComponent`, `memoryScopePath`.

SHA-256 do trecho: `f788c29aa8bda5620348ea0dde447aec22bedab58bfd77cf39757ef296923434`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
