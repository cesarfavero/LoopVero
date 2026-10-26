# `normalizeHostname`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/secure-values/domain.ts` · [README do módulo](../../../../../../modules/core/runner/secure-values/domain-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:758036-758038](../../../../../../../reference/runtime/host-main.cjs#L758036-L758038) | `FunctionDeclaration` | não | `hostname4` |
| [evaluation:546227-546229](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546227-L546229) | `FunctionDeclaration` | não | `hostname3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758036-758038](../../../../../../../reference/runtime/host-main.cjs#L758036-L758038) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546227-546229](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546227-L546229) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:758036

Chamadas escritas diretamente neste corpo: `.replace`, `hostname4.toLowerCase`.

SHA-256 do trecho: `9aa4d6ea170d631384d06befc3f0e677c22d2ff1ee3c3e50a24b6f3351bf9bec`.

### evaluation:546227

Chamadas escritas diretamente neste corpo: `.replace`, `hostname3.toLowerCase`.

SHA-256 do trecho: `595857b6b5e3a6a86f9658211dca29cc65a1c8844e82c3f5a96a3d77ad27ee6e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
