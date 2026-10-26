# `BoxSecretsApplier.persist`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/secrets/secrets-service.ts` · [README do módulo](../../../../../../modules/host/extensions/secrets/secrets-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:709286-709307](../../../../../../../reference/runtime/host-main.cjs#L709286-L709307) | `method` | sim | `desired, generation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709286-709307](../../../../../../../reference/runtime/host-main.cjs#L709286-L709307) | 2 | 0 | 1 | 0 | 1 | 1 |

### host:709286

Chamadas escritas diretamente neste corpo: `Buffer.from`, `JSON.stringify`, `hostNoFollowRoot`, `this.log`, `writeFileAtomic`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `66ebee4902ba6d9ccc9f3c512e2d26b6278e974ae629857e3f9bfd545b377e56`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
