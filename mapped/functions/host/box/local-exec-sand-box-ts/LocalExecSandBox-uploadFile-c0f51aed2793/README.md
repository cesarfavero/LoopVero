# `LocalExecSandBox.uploadFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/box/local-exec-sand-box.ts` · [README do módulo](../../../../../modules/host/box/local-exec-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:627088-627091](../../../../../../reference/runtime/sand-eval-runner.cjs#L627088-L627091) | `method` | sim | `_ctx, _agentId, boxPath, data2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:627088-627091](../../../../../../reference/runtime/sand-eval-runner.cjs#L627088-L627091) | 0 | 0 | 1 | 0 | 0 | 0 |

### evaluation:627088

Chamadas escritas diretamente neste corpo: `this.resolveBoxPath`, `writeFileAtomic`.

SHA-256 do trecho: `a046f72c1248fcf37a3610272e0712716d6f3a99ea07817ba5c2c036db67aba9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
