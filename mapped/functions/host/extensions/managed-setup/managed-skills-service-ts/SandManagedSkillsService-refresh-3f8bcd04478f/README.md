# `SandManagedSkillsService.refresh`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/managed-setup/managed-skills-service.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/managed-skills-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684003-684015](../../../../../../../reference/runtime/host-main.cjs#L684003-L684015) | `method` | sim | `trigger2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684003-684015](../../../../../../../reference/runtime/host-main.cjs#L684003-L684015) | 2 | 0 | 2 | 2 | 0 | 0 |

### host:684003

Chamadas escritas diretamente neste corpo: `this.runRefreshes`.

Alvos de atribuição ou incremento: `this.pendingTrigger`, `this.refreshPromise`.

SHA-256 do trecho: `fd354db287b1866c74ec04fd91b3068ba4c01a9231490ebb6cd989401f6ed891`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
