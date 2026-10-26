# `matchCredentialItemToSite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/credential-domain.ts` · [README do módulo](../../../../../modules/core/runner/credential-domain-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:546825-546839](../../../../../../reference/runtime/host-main.cjs#L546825-L546839) | `FunctionDeclaration` | não | `item, rawTarget` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546825-546839](../../../../../../reference/runtime/host-main.cjs#L546825-L546839) | 4 | 1 | 0 | 4 | 0 | 0 |

### host:546825

Chamadas escritas diretamente neste corpo: `isBrowserLoginCredential`, `isSecureCredentialTarget`, `matchTargetRule`, `parseHttpUrl`.

Alvos de atribuição ou incremento: `best`.

SHA-256 do trecho: `4d5448e7575cf27994363b1adb75b1524ba868063f628a9ee15ce0a6d55e6221`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
