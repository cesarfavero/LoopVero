# `cleanupLegacyGroupMemberDirs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-maintenance.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-maintenance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720353-720373](../../../../../../../reference/runtime/host-main.cjs#L720353-L720373) | `FunctionDeclaration` | sim | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720353-720373](../../../../../../../reference/runtime/host-main.cjs#L720353-L720373) | 1 | 1 | 2 | 1 | 0 | 2 |

### host:720353

Chamadas escritas diretamente neste corpo: `entry.isDirectory`, `errorLogTag`, `removeSandDataTree`, `reportSessionDiagnostic`.

Alvos de atribuição ou incremento: `entries`.

SHA-256 do trecho: `a5eba9e475dca000413db14479ddbe148fa29bf7c3b4b5667cd51516211f713b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
