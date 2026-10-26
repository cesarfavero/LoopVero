# `createCursorChecksum`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/inference/README.md).

**Módulo:** `shared/node/cursor-backend/cursor-inference.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:224912-224924](../../../../../../../reference/runtime/host-main.cjs#L224912-L224924) | `FunctionDeclaration` | não | `machineId` |
| [evaluation:511928-511940](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511928-L511940) | `FunctionDeclaration` | não | `machineId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224912-224924](../../../../../../../reference/runtime/host-main.cjs#L224912-L224924) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511928-511940](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511928-L511940) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:224912

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.from`, `Date.now`, `Math.floor`, `enhancedObfuscate`, `new Uint8Array`.

SHA-256 do trecho: `827a474e69bec4497818d4532ade0a158bda3f590b71cd75632fa29e27590a3d`.

### evaluation:511928

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.from`, `Date.now`, `Math.floor`, `enhancedObfuscate`, `new Uint8Array`.

SHA-256 do trecho: `827a474e69bec4497818d4532ade0a158bda3f590b71cd75632fa29e27590a3d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
