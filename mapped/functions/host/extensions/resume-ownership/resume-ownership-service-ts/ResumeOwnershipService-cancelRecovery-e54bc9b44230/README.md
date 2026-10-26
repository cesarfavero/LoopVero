# `ResumeOwnershipService.cancelRecovery`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/resume-ownership/resume-ownership-service.ts` · [README do módulo](../../../../../../modules/host/extensions/resume-ownership/resume-ownership-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:708782-708787](../../../../../../../reference/runtime/host-main.cjs#L708782-L708787) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708782-708787](../../../../../../../reference/runtime/host-main.cjs#L708782-L708787) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:708782

Chamadas escritas diretamente neste corpo: `recovery.controller.abort`.

SHA-256 do trecho: `856d220bd4aeb6f28083f7b6343dee44ca2b19eefb096dbf9848850815cd122c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
