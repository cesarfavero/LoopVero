# `createSandCursorBackendClient`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/inference/README.md).

**Módulo:** `shared/node/cursor-backend/cursor-inference.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225176-225180](../../../../../../../reference/runtime/host-main.cjs#L225176-L225180) | `FunctionDeclaration` | não | `service, options2` |
| [evaluation:512247-512251](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512247-L512251) | `FunctionDeclaration` | não | `service, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225176-225180](../../../../../../../reference/runtime/host-main.cjs#L225176-L225180) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512247-512251](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512247-L512251) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225176

Chamadas escritas diretamente neste corpo: `createClient`, `createSandBackendTransport`, `invariant`.

SHA-256 do trecho: `7cbb9ba5841a02da682536ae29f81595caadc4fffb9854a90bac04b2ffd0bf17`.

### evaluation:512247

Chamadas escritas diretamente neste corpo: `createClient`, `createSandBackendTransport`, `invariant`.

SHA-256 do trecho: `7cbb9ba5841a02da682536ae29f81595caadc4fffb9854a90bac04b2ffd0bf17`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
