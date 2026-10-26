# `SharedDesktopSandBox.reconnectAfterConnectionLoss`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:555004-555006](../../../../../../reference/runtime/host-main.cjs#L555004-L555006) | `method` | sim | `ctx, lost` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555004-555006](../../../../../../reference/runtime/host-main.cjs#L555004-L555006) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:555004

Chamadas escritas diretamente neste corpo: `this.inner.reconnectAfterConnectionLoss`.

SHA-256 do trecho: `bd6d11080bba1de735f9a588a8d8ef4ff9efdadfd950ffc2a5c17362903b4135`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
