# `ManagedSetupService.refreshManagedSetup`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/managed-setup/managed-setup-service.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683513-683516](../../../../../../../reference/runtime/host-main.cjs#L683513-L683516) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683513-683516](../../../../../../../reference/runtime/host-main.cjs#L683513-L683516) | 1 | 0 | 1 | 0 | 1 | 0 |

### host:683513

Chamadas escritas diretamente neste corpo: `this.refresh`.

Alvos de lançamento explícito: `outcome.failure.error`.

SHA-256 do trecho: `b3c960566abf1e47458a56957c2b9c8a82d2a349a2761caa2355a9434e64c62a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
