# `BoxTransferError.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-transfer.ts` · [README do módulo](../../../../../modules/core/box/box-transfer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476460-476464](../../../../../../reference/runtime/host-main.cjs#L476460-L476464) | `method` | não | `code, message, options2` |
| [evaluation:515598-515602](../../../../../../reference/runtime/sand-eval-runner.cjs#L515598-L515602) | `method` | não | `code, message, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476460-476464](../../../../../../reference/runtime/host-main.cjs#L476460-L476464) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515598-515602](../../../../../../reference/runtime/sand-eval-runner.cjs#L515598-L515602) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:476460

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.code`, `this.name`.

SHA-256 do trecho: `fe9df5cc4ae069bdf64df56e532e5a5785298124b9161e1273f36b93c6ecdb20`.

### evaluation:515598

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.code`, `this.name`.

SHA-256 do trecho: `fe9df5cc4ae069bdf64df56e532e5a5785298124b9161e1273f36b93c6ecdb20`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
