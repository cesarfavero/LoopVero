# `AttachmentTooLargeError.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/attachment-limits.ts` · [README do módulo](../../../../../modules/shared/media/attachment-limits-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497076-497080](../../../../../../reference/runtime/host-main.cjs#L497076-L497080) | `method` | não | `limitBytes` |
| [evaluation:533438-533442](../../../../../../reference/runtime/sand-eval-runner.cjs#L533438-L533442) | `method` | não | `limitBytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497076-497080](../../../../../../reference/runtime/host-main.cjs#L497076-L497080) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:533438-533442](../../../../../../reference/runtime/sand-eval-runner.cjs#L533438-L533442) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:497076

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.limitBytes`, `this.name`.

SHA-256 do trecho: `05cc4973cc2dd6da3c4016ccf8f1f902c69fd2d9d33f2f0036109c02062988a2`.

### evaluation:533438

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.limitBytes`, `this.name`.

SHA-256 do trecho: `05cc4973cc2dd6da3c4016ccf8f1f902c69fd2d9d33f2f0036109c02062988a2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
